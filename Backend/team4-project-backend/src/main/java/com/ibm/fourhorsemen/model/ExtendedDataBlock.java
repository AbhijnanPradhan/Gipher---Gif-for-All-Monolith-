package com.ibm.fourhorsemen.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ExtendedDataBlock extends DataBlock {
	
	private long recommendCount;
	
	
	public ExtendedDataBlock() {
		
	}
	
	public ExtendedDataBlock(long recommendCount, String type, String id, String url, String title, String rating, String import_datetime,
			ImagesBlock images, UserBlock user) {
		super(type, id, url, title, rating, import_datetime, images, user);
		this.setRecommendCount(recommendCount);
	}

	public long getRecommendCount() {
		return recommendCount;
	}

	public void setRecommendCount(long recommendCount) {
		this.recommendCount = recommendCount;
	}
}
