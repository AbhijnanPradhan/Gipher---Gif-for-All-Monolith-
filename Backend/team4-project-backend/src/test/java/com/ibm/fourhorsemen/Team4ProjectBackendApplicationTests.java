package com.ibm.fourhorsemen;

import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

import org.hamcrest.CoreMatchers;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fourhorsemen.controller.UserController;
import com.ibm.fourhorsemen.model.AuthenticationRequest;
import com.ibm.fourhorsemen.model.DataBlock;
import com.ibm.fourhorsemen.model.User;
import com.ibm.fourhorsemen.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
@TestInstance(Lifecycle.PER_CLASS)
class Team4ProjectBackendApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	@Mock
	UserService userService;

	@InjectMocks
	private UserController userController;

	@Autowired
	private MockHttpSession session;

	User user;
	Date dob = new Date();
	Date added = new Date();

	public String token;

	public static String asJsonString(final Object obj) {
		try {
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonContent = mapper.writeValueAsString(obj);
			return jsonContent;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		user = new User("test1", "Test User", "test@abc.com", "male", "1234567890", dob, added, "password",
				"ROLE_ADMIN");
		session.setAttribute("loggedInUserId", user.getUserId());
	}

	@Test
	@Order(1)
	void contextLoads() {
	}

	// ------------------USER

	@Test
	@Order(1)
	public void testRegisterUser() throws Exception {
		when(userService.registerUser(user)).thenReturn(true);
		user = new User("test1", "Test User", "test@abc.com", "male", "1234567890", dob, added, "password",
				"ROLE_ADMIN");
		MvcResult result = mockMvc.perform(post("/user/register?password=" + user.getPassword())
				.contentType(MediaType.APPLICATION_JSON).content(asJsonString(user))).andExpect(status().isOk())
				.andDo(print()).andReturn();
		assertThat(result.getResponse().getContentAsString(), CoreMatchers.containsString("Success"));
	}

	@Test
	@Order(2)
	public void testRegisterDuplicateUser() throws Exception {
		when(userService.registerUser(user)).thenReturn(true);
		user = new User("test1", "Test User", "test@abc.com", "male", "1234567890", dob, added, "password",
				"ROLE_ADMIN");
		MvcResult result = mockMvc.perform(post("/user/register?password=" + user.getPassword())
				.contentType(MediaType.APPLICATION_JSON).content(asJsonString(user))).andExpect(status().isOk())
				.andDo(print()).andReturn();
		assertThat(result.getResponse().getContentAsString(), CoreMatchers.containsString("User exists"));
	}

	@Test
	@Order(3)
	public void testAuthentication() throws Exception {
		AuthenticationRequest req = new AuthenticationRequest();
		req.setUserId("test1");
		req.setPassword("password");
		MvcResult result = mockMvc
				.perform(post("/authenticate").contentType(MediaType.APPLICATION_JSON).content(asJsonString(req)))
				.andExpect(status().isOk()).andDo(print()).andReturn();
		String response = result.getResponse().getContentAsString();
		JSONObject object = new JSONObject(response);

		token = object.getString("token");
		System.out.println("Token " + token);

		assertThat(response, CoreMatchers.containsString("Success"));
	}

	@Test
	@Order(4)
	public void testGetUser() throws Exception {
		System.out.println("Token " + token);

		MvcResult result = mockMvc.perform(get("/user/get?userId=" + user.getUserId())
				.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andReturn();
		String response = result.getResponse().getContentAsString();

		assertThat(response, CoreMatchers.containsString("Success"));
	}

	// ------------------RECOMMENDED
	
	@Test
	@Order(5)
	public void testAddRecommended() throws Exception {
		DataBlock block = new DataBlock();
		block.setId("gif1");
		block.setTitle("Test Gif");

		MvcResult result = mockMvc.perform(post("/recommended/add?userId=" + user.getUserId())
				.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(block)))
				.andExpect(status().isOk()).andReturn();
		String response = result.getResponse().getContentAsString();

		assertThat(response, CoreMatchers.containsString("Success"));
	}
	
	@Test
	@Order(6)
	public void testGetRecommended() throws Exception {
		MvcResult result = mockMvc.perform(get("/recommended/get?userId=" + user.getUserId())
				.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andReturn();
		String response = result.getResponse().getContentAsString();

		assertThat(response, CoreMatchers.containsString("Test Gif"));
	}
	
	@Test
	@Order(6)
	public void testDuplicateRecommended() throws Exception {
		DataBlock block = new DataBlock();
		block.setId("gif1");
		block.setTitle("Test Gif");

		MvcResult result = mockMvc.perform(post("/recommended/add?userId=" + user.getUserId())
				.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(block)))
				.andExpect(status().isOk()).andReturn();
		String response = result.getResponse().getContentAsString();

		assertThat(response, CoreMatchers.containsString("Recommendation already exists"));
	}
	
	@Test
	@Order(7)
	public void testRemoveRecommended() throws Exception {
		DataBlock block = new DataBlock();
		block.setId("gif1");
		block.setTitle("Test Gif");

		MvcResult result = mockMvc.perform(post("/recommended/remove?userId=" + user.getUserId())
				.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(block)))
				.andExpect(status().isOk()).andReturn();
		String response = result.getResponse().getContentAsString();

		assertThat(response, CoreMatchers.containsString("Success"));
	}
	
	// ------------------Favourite
	
		@Test
		@Order(5)
		public void testAddFavourite() throws Exception {
			DataBlock block = new DataBlock();
			block.setId("gif1");
			block.setTitle("Test Gif");

			MvcResult result = mockMvc.perform(post("/favorites/add?userId=" + user.getUserId())
					.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
					.content(asJsonString(block)))
					.andExpect(status().isOk()).andReturn();
			String response = result.getResponse().getContentAsString();

			assertThat(response, CoreMatchers.containsString("Success"));
		}
		
		@Test
		@Order(6)
		public void testGetFavourite() throws Exception {
			MvcResult result = mockMvc.perform(get("/favorites/get?userId=" + user.getUserId())
					.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk()).andReturn();
			String response = result.getResponse().getContentAsString();

			assertThat(response, CoreMatchers.containsString("Test Gif"));
		}
		
		@Test
		@Order(6)
		public void testDuplicateFavourite() throws Exception {
			DataBlock block = new DataBlock();
			block.setId("gif1");
			block.setTitle("Test Gif");

			MvcResult result = mockMvc.perform(post("/favorites/add?userId=" + user.getUserId())
					.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
					.content(asJsonString(block)))
					.andExpect(status().isOk()).andReturn();
			String response = result.getResponse().getContentAsString();

			assertThat(response, CoreMatchers.containsString("Favorites already exists"));
		}
		
		@Test
		@Order(7)
		public void testRemoveFavourite() throws Exception {
			DataBlock block = new DataBlock();
			block.setId("gif1");
			block.setTitle("Test Gif");

			MvcResult result = mockMvc.perform(post("/favorites/remove?userId=" + user.getUserId())
					.header("Authorization", "Bearer " + token).contentType(MediaType.APPLICATION_JSON)
					.content(asJsonString(block)))
					.andExpect(status().isOk()).andReturn();
			String response = result.getResponse().getContentAsString();

			assertThat(response, CoreMatchers.containsString("Success"));
		}
	
	// ------------------CLEANUP

	@AfterAll
	public void cleanup() {
//		System.out.println("AfterAll executed");
//		when(userService.deleteUser("test1")).thenReturn(true);
	}
}
