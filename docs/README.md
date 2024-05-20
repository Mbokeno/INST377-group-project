# INST377-group-project
- Group members: Bryan Bokino, Beza Ermias, Fatmata Jalloh, Alexander Rosa, Jay Yoon
- Title: NSFW Detection
- Description: The goal of our project is to create a website where users can upload an image to see if the image is considered "Safe for Work"
- Description of target browsers: Our website is designed for computers, but the website should run on ios and android.
- [Go to Developer Manual](#developer-manual)

## Developer Manual
### Installation
1. Clone the repository into your desired directory
2. Open the project directory


### Running the application


### Testing NSFW Detection
To conduct tests on our website's NSFW detection feature, follow these steps:

1. Download Test Images:
- Navigate to the "tests images" folder in the repository.
- Download the following files:
    - "nsfw_test.jpg"
    - "sfw_test.jpg"

2. upload Test Images:
- After downloading the files, visit the NSFW Detection page on our website.
- Upload either of the downloaded images (nsfw_test.jpg or sfw_test.jpg).

3. Expected Results:
- If the NSFW detection is functioning correctly:
    - Uploading nsfw_test.jpg should prompt a message stating: "This image is NOT safe for work."
    - Uploading sfw_test.jpg should prompt a message stating: "This image is safe for work."


### About API
1. unsplash Developers
    - Description: Retrieves a random collection of photos
    - Endpoint: https://api.unsplash.com/photos/random/?count=20&orientation=portrait&client_id=0GmZkaBU2DOwmwYP5re3aVZBM8I6nQMwSvKX1W5ISbQ
2. Glide
    - Description: Transitions photos and allows users to swipe to new set of photos
    - Endpoint: https://cdn.jsdelivr.net/npm/@glidejs/glide
3. Filepond
    - Description: Shows a preview of the image that was upload by the user
    - Endpoint: https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js

### Future Development and Bugs
