package com.ibm.fourhorsemen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class DataBlock {
	private String type;
	@Id private String id;
	private String url;
	private String title;
	private String rating;
	private String import_datetime;
	private ImagesBlock images;
	public UserBlock user;  // creator of the gif

	public DataBlock() {

	}

	/**
	 * @param type
	 * @param id
	 * @param url
	 * @param title
	 * @param rating
	 * @param import_datetime
	 * @param images
	 * @param user
	 */
	public DataBlock(String type, String id, String url, String title, String rating, String import_datetime,
			ImagesBlock images, UserBlock user) {
		this.type = type;
		this.id = id;
		this.url = url;
		this.title = title;
		this.rating = rating;
		this.import_datetime = import_datetime;
		this.images = images;
		this.user = user;
	}

	public String getType() {
		return type;
	}

	public String getId() {  // implementation for UserItemModelInterface
		return id;
	}

	public String getUrl() {
		return url;
	}

	public String getTitle() {
		return title;
	}

	public String getRating() {
		return rating;
	}

	public String getImport_datetime() {
		return import_datetime;
	}

	public ImagesBlock getImages() {
		return images;
	}

	public UserBlock getUser() {
		return user;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public void setImport_datetime(String import_datetime) {
		this.import_datetime = import_datetime;
	}

	public void setImages(ImagesBlock images) {
		this.images = images;
	}

	public void setUser(UserBlock user) {
		this.user = user;
	}
}
