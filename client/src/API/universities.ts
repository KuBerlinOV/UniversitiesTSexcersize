import axios from 'axios';

export const getUnis = async (country: string) => {
    const { data } = await axios(`http://universities.hipolabs.com/search?country=${country}`)
    return data
}