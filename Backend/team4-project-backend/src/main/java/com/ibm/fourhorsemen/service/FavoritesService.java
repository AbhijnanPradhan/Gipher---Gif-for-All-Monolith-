package com.ibm.fourhorsemen.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.fourhorsemen.model.DataBlock;
import com.ibm.fourhorsemen.model.ExtendedDataBlock;
import com.ibm.fourhorsemen.model.UserDataBlockMap;
import com.ibm.fourhorsemen.model.UserDataBlockMapId;
import com.ibm.fourhorsemen.repository.DataRepository;
import com.ibm.fourhorsemen.repository.UserDataMapRepository;

@Service
public class FavoritesService {
	public static final String TYPE_MAP_FAVORITE = "favorite";

	private DataRepository dataRepository;
	private UserDataMapRepository userDataMapRepository;

	@Autowired
	public FavoritesService(DataRepository dataRepository, UserDataMapRepository userDataMapRepository) {
		this.dataRepository = dataRepository;
		this.userDataMapRepository = userDataMapRepository;
	}

	@Transactional
	public UserDataBlockMap addFavoriteToUser(String userId, DataBlock dataBlock) {

		if (!userDataMapRepository.existsById(new UserDataBlockMapId(userId, dataBlock.getId(), TYPE_MAP_FAVORITE))) {
			UserDataBlockMap map = new UserDataBlockMap(userId, dataBlock.getId(), TYPE_MAP_FAVORITE);
			System.out.println("Adding favourite");
			// adding the mapping of gifId and userId with type as favorite
			userDataMapRepository.save(map);
			ExtendedDataBlock block = new ExtendedDataBlock();
			BeanUtils.copyProperties(dataBlock, block);
			dataRepository.save(block);
			return map;

		}
		// returns null if already exists
		return null;
	}

	@Transactional
	public int removeFavoriteFromUser(String userId, DataBlock dataBlock) {
		if (userDataMapRepository.existsById(new UserDataBlockMapId(userId, dataBlock.getId(), TYPE_MAP_FAVORITE))) {

			userDataMapRepository.deleteById(new UserDataBlockMapId(userId, dataBlock.getId(), TYPE_MAP_FAVORITE));
			// Removed From Favorites
			return 1;
		}
		// Does not exist in Favorites
		return -1;
	}

	public List<ExtendedDataBlock> getAllFavoritesOfUser(String userId) {
		List<UserDataBlockMap> userDataBlockMaps = userDataMapRepository.findByUserIdType(userId, TYPE_MAP_FAVORITE);
		List<String> gifIds = new ArrayList<>();
		for (UserDataBlockMap map : userDataBlockMaps)
			gifIds.add(map.getGifId());
		Iterable<ExtendedDataBlock> blockIterable = dataRepository.findAllById(gifIds);
		List<ExtendedDataBlock> result = new ArrayList<ExtendedDataBlock>();
		blockIterable.forEach(result::add);
		System.out.println("Size of getFavourite" + result.size());
		return result;
	}

}
