import React from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import add_a_photo from './assets/add_a_photo.svg'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function TestingImgUpload({ image, setImage, title }) {
  let imageInput = React.createRef()

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  function handleRefOnClick() {
    imageInput.current.click()
  }

  return (
    <div>
      {image ? (
        <ImageWrapper>
          <RecipeImage src={image} alt={title} />
        </ImageWrapper>
      ) : (
        <>
          <TextButton onClick={handleRefOnClick}>
            <input
              type="file"
              name="file"
              onChange={upload}
              ref={imageInput}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <img src={add_a_photo} alt="Rezeptfoto aufnahmen" />
            <span className="text">Foto hinzufügen</span>
          </TextButton>
        </>
      )}
    </div>
  )
}

const TextButton = styled.div`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px auto 20px;
  & > span {
    color: #e29413;
    font-weight: 600;
    margin-left: 10px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 12px;
`

const RecipeImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`
