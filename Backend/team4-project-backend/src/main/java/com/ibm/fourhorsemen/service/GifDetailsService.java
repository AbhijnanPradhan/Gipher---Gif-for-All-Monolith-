package com.ibm.fourhorsemen.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fourhorsemen.controller.response.AllGifDetailsResponse;
import com.ibm.fourhorsemen.controller.response.ResponseMessages;
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
		if (optionalBlock.isPresent()) {
			UserExtendedDataBlock resultBlock = new UserExtendedDataBlock();
			BeanUtils.copyProperties(optionalBlock.get(), resultBlock);

			List<UserDataBlockMap> maps = userDataMapRepository.findByUserIdGifId(userId, gifId);
			for (UserDataBlockMap map : maps) {
				if (map.getType().equals(FavoritesService.TYPE_MAP_FAVORITE))
					resultBlock.setFavourite(true);
				if (map.getType().equals(RecommendedService.TYPE_MAP_RECOMMEND))
					resultBlock.setRecommended(true);
			}
			return resultBlock;
		} else
			return null;
	}

	public AllGifDetailsResponse getAll(String userId) {
		List<String> favourites = new ArrayList<>();
		List<String> recommends = new ArrayList<>();
		List<UserDataBlockMap> maps = userDataMapRepository.findByUserId(userId);
		for (UserDataBlockMap map : maps) {
			if (map.getType().equals(FavoritesService.TYPE_MAP_FAVORITE))
				favourites.add(map.getGifId());
			else if (map.getType().equals(RecommendedService.TYPE_MAP_RECOMMEND))
				recommends.add(map.getGifId());
		}
		return new AllGifDetailsResponse(ResponseMessages.SUCCESS, favourites, recommends);
	}
}
