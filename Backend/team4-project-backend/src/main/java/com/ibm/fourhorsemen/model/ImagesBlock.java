package com.ibm.fourhorsemen.model;

public class ImagesBlock {
	private OriginalBlock original;
	private DownsizedBlock downsized;

	public ImagesBlock() {

	}

	/**
	 * @param original
	 * @param downsized
	 */
	public ImagesBlock(OriginalBlock original, DownsizedBlock downsized) {
		this.original = original;
		this.downsized = downsized;
	}

	public OriginalBlock getOriginal() {
		return original;
	}

	public DownsizedBlock getDownsized() {
		return downsized;
	}

	public void setOriginal(OriginalBlock original) {
		this.original = original;
	}

	public void setDownsized(DownsizedBlock downsized) {
		this.downsized = downsized;
	}

}
