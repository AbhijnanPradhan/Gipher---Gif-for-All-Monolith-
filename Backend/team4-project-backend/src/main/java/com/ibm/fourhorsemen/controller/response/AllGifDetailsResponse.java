package com.ibm.fourhorsemen.controller.response;

import java.util.List;

public class AllGifDetailsResponse {
	private String message;
	private List<String> favouriteIds;
	private List<String> recommendIds;

	public AllGifDetailsResponse(String message, List<String> favouriteIds, List<String> recommendIds) {
		this.message = message;
		this.favouriteIds = favouriteIds;
		this.recommendIds = recommendIds;
	}

	public String getMessage() {
		return message;
	}

	public List<String> getFavouriteIds() {
		return favouriteIds;
	}

	public List<String> getRecommendIds() {
		return recommendIds;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setFavouriteIds(List<String> favouriteIds) {
		this.favouriteIds = favouriteIds;
	}

	public void setRecommendIds(List<String> recommendIds) {
		this.recommendIds = recommendIds;
	}

}
