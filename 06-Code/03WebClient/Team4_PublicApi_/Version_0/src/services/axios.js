import axios from 'axios'

const baseUrl='https://api.plos.org/'

export async function getTitle(nameTitle){
    try {
        const response= await axios({
            url:`${baseURL}$={nameTitle}`,
            method:'GET',
        })
        return response
    }catch(error){
        console.log(error)
    }
}
