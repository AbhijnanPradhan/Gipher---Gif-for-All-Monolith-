package com.ibm.fourhorsemen.model;

public class UserExtendedDataBlock extends ExtendedDataBlock {
	private boolean favourite;
	private boolean recommended;
	
	public UserExtendedDataBlock() {
	}

	public boolean isFavourite() {
		return favourite;
	}

	public boolean isRecommended() {
		return recommended;
	}

	public void setFavourite(boolean favourite) {
		this.favourite = favourite;
	}

	public void setRecommended(boolean recommended) {
		this.recommended = recommended;
	}
}
