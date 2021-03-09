package com.ibm.fourhorsemen.model;

public class DownsizedBlock {
	private int height;
	private int width;
	private int size;
	private String url;

	public DownsizedBlock() {
	}

	/**
	 * @param height
	 * @param width
	 * @param size
	 * @param url
	 */
	public DownsizedBlock(int height, int width, int size, String url) {
		this.height = height;
		this.width = width;
		this.size = size;
		this.url = url;
	}

	public int getHeight() {
		return height;
	}

	public int getWidth() {
		return width;
	}

	public int getSize() {
		return size;
	}

	public String getUrl() {
		return url;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
