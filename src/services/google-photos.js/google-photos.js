const axios = require('axios');

//This function calls to https://glitch.com/edit/#!/google-photos-album-demo2?path=google-photos.js%3A22%3A1
//See article: https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c
export async function getAlbum(id) {
	const response = await axios.get(
        `https://google-photos-album-demo2.glitch.me/${id}`
      );
	return response.data;
}