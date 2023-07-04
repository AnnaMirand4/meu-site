import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Subtitle from './Subtitle'
import Text from './Text'
import Title from './Title'


const Repos = () => {
    const [Repos, setRepos] = useState([])

    useEffect(() => {
        const getRepo = async () => {
            try {
                const response = await Axios.get('https://api.github.com/users/AnnaMirand4/repos')
                setRepos(response.data)

            } catch (error) {
                console.error('erro capturado:' + error)
            }

        };
        getRepo()
        
    },[])

  return (
    <div>
        <Title content= 'Meus repositórios no GitHub' />
        {Repos.map (repo => {
            return(
                <div className='cardContainer'>
                 <div className="repoCard">
                <Subtitle content={repo.name} />
                <Text content={repo.description} />
        
                </div>
                </div>
            )
        })

        }
    </div>
  )
}

export default Repos