package com.ibm.fourhorsemen.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

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
public class RecommendedService {
	public static final String TYPE_MAP_RECOMMEND = "recommend";

	private DataRepository dataRepository;
	private UserDataMapRepository userDataMapRepository;

	@Autowired
	public RecommendedService(DataRepository dataRepository, UserDataMapRepository userDataMapRepository) {
		this.dataRepository = dataRepository;
		this.userDataMapRepository = userDataMapRepository;
	}

	@Transactional
	public ExtendedDataBlock addRecommend(String userId, DataBlock dataBlock) {
		ExtendedDataBlock resultBlock = null;
		UserDataBlockMap map = new UserDataBlockMap(userId, dataBlock.getId(), TYPE_MAP_RECOMMEND);
		if (!userDataMapRepository.existsById(new UserDataBlockMapId(userId, dataBlock.getId(), TYPE_MAP_RECOMMEND))) {
			try {
				// incrementing recommended count by 1
				ExtendedDataBlock block = dataRepository.findById(dataBlock.getId()).get();
				block.setRecommendCount(block.getRecommendCount() + 1);
				resultBlock = dataRepository.save(block);
			} catch (NoSuchElementException e) {
				ExtendedDataBlock extendedBlock = new ExtendedDataBlock();
				BeanUtils.copyProperties(dataBlock, extendedBlock);
				extendedBlock.setRecommendCount(1);
				resultBlock = dataRepository.save(extendedBlock);
			}

			// adding the mapping of gifId and userId
			userDataMapRepository.save(map);
		}
		return resultBlock;
	}

	@Transactional
	public ExtendedDataBlock removeRecommend(String userId, DataBlock dataBlock) {
		ExtendedDataBlock resultBlock = null;
		UserDataBlockMap map = new UserDataBlockMap(userId, dataBlock.getId(), TYPE_MAP_RECOMMEND);
		if (userDataMapRepository.existsById(new UserDataBlockMapId(userId, dataBlock.getId(), TYPE_MAP_RECOMMEND))) {
			try {
				// removing the mapping of gifId and userId
				userDataMapRepository.delete(map);
				
				// decrementing recommended count by 1
				ExtendedDataBlock block = dataRepository.findById(dataBlock.getId()).get();
				block.setRecommendCount(block.getRecommendCount() - 1);
				resultBlock = dataRepository.save(block);
			} catch (NoSuchElementException e) {
				System.out.println("No such element");
			}
		}
		return resultBlock;
	}

	public List<ExtendedDataBlock> getRecommends(String userId) {
		List<String> gifIds = userDataMapRepository.findGifIdsByType(TYPE_MAP_RECOMMEND);
		Iterable<ExtendedDataBlock> blockIterable = dataRepository.findAllById(gifIds);
		List<ExtendedDataBlock> result = new ArrayList<ExtendedDataBlock>();
		blockIterable.forEach(result::add);
		return result;
	}
}
