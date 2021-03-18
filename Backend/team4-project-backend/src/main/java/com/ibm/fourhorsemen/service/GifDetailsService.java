package com.ibm.fourhorsemen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fourhorsemen.model.ExtendedDataBlock;
import com.ibm.fourhorsemen.model.UserDataBlockMap;
import com.ibm.fourhorsemen.model.UserExtendedDataBlock;
import com.ibm.fourhorsemen.repository.DataRepository;
import com.ibm.fourhorsemen.repository.UserDataMapRepository;

@Service
public class GifDetailsService {

	private DataRepository dataRepository;
	private UserDataMapRepository userDataMapRepository;

	@Autowired
	public GifDetailsService(DataRepository dataRepository, UserDataMapRepository userDataMapRepository) {
		this.dataRepository = dataRepository;
		this.userDataMapRepository = userDataMapRepository;
	}

	public UserExtendedDataBlock getDetails(String userId, String gifId) {
		Optional<ExtendedDataBlock> optionalBlock = dataRepository.findById(gifId);
		if(optionalBlock.isPresent()) {
			UserExtendedDataBlock resultBlock = new UserExtendedDataBlock();
			BeanUtils.copyProperties(optionalBlock.get(), resultBlock);
			
			List<UserDataBlockMap> maps = userDataMapRepository.findByUserIdGifId(userId, gifId);
			for(UserDataBlockMap map : maps) {
				if(map.getType().equals(FavoritesService.TYPE_MAP_FAVORITE))
					resultBlock.setFavourite(true);
				if(map.getType().equals(RecommendedService.TYPE_MAP_RECOMMEND))
					resultBlock.setRecommended(true);
			}
			return resultBlock;
		} else 
			return null;
	}
}
