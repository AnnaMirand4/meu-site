import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Subtitle from './Subtitle'
import Text from './Text'
import Title from './Title'
import { RiGitRepositoryFill } from '/react-icons/Ri'
import style from '../styles/components/repos.module.css'

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
    <div className={style.repoContainer}>
        <Title content= 'Meus repositórios no GitHub' />
        
    <div className= {style.cardContainer}>
        
        {Repos.map (repo => {
            return(
                 <div key={repo.id} className={style.repoCard}>
                <Subtitle content={repo.name} />
                <Text content={repo.description} />
                <div className={style.arrow}><a href={repo.html_url} target='blank'>
                <RiGitRepositoryFill />
                </a></div>
        
                </div>
        
            )
        })

        }
    </div>
    </div>
  )
}

export default Repos