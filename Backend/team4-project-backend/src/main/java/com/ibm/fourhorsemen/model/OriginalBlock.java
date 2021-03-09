package com.ibm.fourhorsemen.model;

public class OriginalBlock {
	private int height;
	private int number;
	private int size;
	private String url;
	private String mp4_size;
	private String mp4;
	private int webp_size;
	private String webp;
	private int frames;
	private String hash;

	public OriginalBlock() {

	}

	/**
	 * @param height
	 * @param number
	 * @param size
	 * @param url
	 * @param mp4_size
	 * @param mp4
	 * @param webp_size
	 * @param webp
	 * @param frames
	 * @param hash
	 */
	public OriginalBlock(int height, int number, int size, String url, String mp4_size, String mp4, int webp_size,
			String webp, int frames, String hash) {
		this.height = height;
		this.number = number;
		this.size = size;
		this.url = url;
		this.mp4_size = mp4_size;
		this.mp4 = mp4;
		this.webp_size = webp_size;
		this.webp = webp;
		this.frames = frames;
		this.hash = hash;
	}

	public int getHeight() {
		return height;
	}

	public int getNumber() {
		return number;
	}

	public int getSize() {
		return size;
	}

	public String getUrl() {
		return url;
	}

	public String getMp4_size() {
		return mp4_size;
	}

	public String getMp4() {
		return mp4;
	}

	public int getWebp_size() {
		return webp_size;
	}

	public String getWebp() {
		return webp;
	}

	public int getFrames() {
		return frames;
	}

	public String getHash() {
		return hash;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public void setMp4_size(String mp4_size) {
		this.mp4_size = mp4_size;
	}

	public void setMp4(String mp4) {
		this.mp4 = mp4;
	}

	public void setWebp_size(int webp_size) {
		this.webp_size = webp_size;
	}

	public void setWebp(String webp) {
		this.webp = webp;
	}

	public void setFrames(int frames) {
		this.frames = frames;
	}

	public void setHash(String hash) {
		this.hash = hash;
	}

}
