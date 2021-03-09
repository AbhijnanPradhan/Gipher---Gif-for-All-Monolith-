package com.ibm.fourhorsemen.model;

public class UserBlock {
	private String avatar_url;
	private String banner_image;
	private String banner_url;
	private String profile_url;
	private String username;
	private String display_name;
	private String description;
	private String instagram_url;
	private String website_url;
	private boolean is_verified;

	public UserBlock() {
	}

	/**
	 * @param avatar_url
	 * @param banner_image
	 * @param banner_url
	 * @param profile_url
	 * @param username
	 * @param display_name
	 * @param description
	 * @param instagram_url
	 * @param website_url
	 * @param is_verified
	 */
	public UserBlock(String avatar_url, String banner_image, String banner_url, String profile_url, String username,
			String display_name, String description, String instagram_url, String website_url, boolean is_verified) {
		this.avatar_url = avatar_url;
		this.banner_image = banner_image;
		this.banner_url = banner_url;
		this.profile_url = profile_url;
		this.username = username;
		this.display_name = display_name;
		this.description = description;
		this.instagram_url = instagram_url;
		this.website_url = website_url;
		this.is_verified = is_verified;
	}

	public String getAvatar_url() {
		return avatar_url;
	}

	public String getBanner_image() {
		return banner_image;
	}

	public String getBanner_url() {
		return banner_url;
	}

	public String getProfile_url() {
		return profile_url;
	}

	public String getUsername() {
		return username;
	}

	public String getDisplay_name() {
		return display_name;
	}

	public String getDescription() {
		return description;
	}

	public String getInstagram_url() {
		return instagram_url;
	}

	public String getWebsite_url() {
		return website_url;
	}

	public boolean isIs_verified() {
		return is_verified;
	}

	public void setAvatar_url(String avatar_url) {
		this.avatar_url = avatar_url;
	}

	public void setBanner_image(String banner_image) {
		this.banner_image = banner_image;
	}

	public void setBanner_url(String banner_url) {
		this.banner_url = banner_url;
	}

	public void setProfile_url(String profile_url) {
		this.profile_url = profile_url;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setDisplay_name(String display_name) {
		this.display_name = display_name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setInstagram_url(String instagram_url) {
		this.instagram_url = instagram_url;
	}

	public void setWebsite_url(String website_url) {
		this.website_url = website_url;
	}

	public void setIs_verified(boolean is_verified) {
		this.is_verified = is_verified;
	}
}
