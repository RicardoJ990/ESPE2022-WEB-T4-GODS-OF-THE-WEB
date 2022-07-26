import axios from 'axios'

const baseUrl = 'https://api.plos.org'

export async function getId(article){
  try{
      const response = await axios({
          url: `${baseUrl}/search?q=title:${article}`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}