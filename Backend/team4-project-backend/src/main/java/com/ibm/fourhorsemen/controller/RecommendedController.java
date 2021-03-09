package com.ibm.fourhorsemen.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fourhorsemen.model.DataBlock;

@RestController
@RequestMapping("/recommended")
public class RecommendedController {

	@GetMapping("/get")
	public ResponseEntity<List<DataBlock>> getRecommended() {
		ResponseEntity<List<DataBlock>> rs = null;
		
//		try {
//			// TODO query the favourites from MongoDB
//			if (bk != null)
//				rs = ResponseEntity.status(HttpStatus.CREATED).build();
//			else
//				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		} catch (Exception e) {
//			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
//		}
		List<DataBlock> list = new ArrayList<>();
		String jsonString = "{\"type\":\"gif\",\"id\":\"3oz8xRF0v9WMAUVLNK\",\"url\":\"https://giphy.com/gifs/studiosoriginals-3oz8xRF0v9WMAUVLNK\",\"slug\":\"studiosoriginals-3oz8xRF0v9WMAUVLNK\",\"bitly_gif_url\":\"http://gph.is/2f8D3WS\",\"bitly_url\":\"http://gph.is/2f8D3WS\",\"embed_url\":\"https://giphy.com/embed/3oz8xRF0v9WMAUVLNK\",\"username\":\"studiosoriginals\",\"source\":\"\",\"title\":\"Happy So Excited GIF by GIPHY Studios Originals\",\"rating\":\"g\",\"content_url\":\"\",\"source_tld\":\"\",\"source_post_url\":\"\",\"is_sticker\":0,\"import_datetime\":\"2016-11-18 20:44:33\",\"trending_datetime\":\"2021-03-05 07:30:14\",\"images\":{\"original\":{\"height\":\"320\",\"width\":\"480\",\"size\":\"1404516\",\"url\":\"https://media2.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71xivosr23933ikmwfcg4esp0yqgcdc86i1okp9da2&rid=giphy.gif\",\"mp4_size\":\"1824620\",\"mp4\":\"https://media2.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.mp4?cid=af2b9d71xivosr23933ikmwfcg4esp0yqgcdc86i1okp9da2&rid=giphy.mp4\",\"webp_size\":\"1479930\",\"webp\":\"https://media2.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.webp?cid=af2b9d71xivosr23933ikmwfcg4esp0yqgcdc86i1okp9da2&rid=giphy.webp\",\"frames\":\"29\",\"hash\":\"b1da09dced9c6623d3aeb9bd59eccd99\"},\"downsized\":{\"height\":\"320\",\"width\":\"480\",\"size\":\"1404516\",\"url\":\"https://media2.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71xivosr23933ikmwfcg4esp0yqgcdc86i1okp9da2&rid=giphy.gif\"}}}";
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		try {
			DataBlock dataBlock = objectMapper.readValue(jsonString, DataBlock.class);
			list.add(dataBlock);
			list.add(dataBlock);
			list.add(dataBlock);
			list.add(dataBlock);
			list.add(dataBlock);
			rs = ResponseEntity.ok(list);
		} catch (JsonMappingException e) {
			rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			e.printStackTrace();
		}
		
		return rs;
	}
}
