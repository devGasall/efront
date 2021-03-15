import React,{useState} from 'react'
import Layout from './Layout'
import {createCategory} from '../api/category'
import {isAuthenticated} from '../auth'
const Category =()=>{

    const [name,setName]=useState('')
    const [error,setError]=useState(false)
    const [wsucces,setSuccess]=useState(false)

    const {user,token} = isAuthenticated()

    const handleChange=(e)=>{
        setError('')
        setName(e.target.value)
    }

    const clickSubmit=(e)=>{
        e.preventDefault()
        if(name){
            createCategory(token,name)
        }
        setName('')
    }

    const addCategory=()=>(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              + Nouvelle categorie
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Ajouter une nouvelle categorie</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <input onChange={handleChange} class="form-control form-control-lg" type="text" placeholder="saisissez la nouvelle categorie" aria-label=".form-control-lg example" />
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    <button type="button" onClick={clickSubmit} class="btn btn-primary">Ajouter</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

    return(
        <Layout title="Category" description="Bienvenue dans la page de categorie" >
            {addCategory()}
           
        </Layout>
    )
}
export default Category
