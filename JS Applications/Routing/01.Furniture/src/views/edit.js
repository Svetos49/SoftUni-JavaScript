import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, editRecord} from '../api/data.js'


const editTemplate = (item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid) => html `
            <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${'form-control '  + (makeValid ? 'is-valid' : 'is-invalid')}
                        id="new-make" type="text" name="make" value="${item.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${'form-control '  + (modelValid ? 'is-valid' : 'is-invalid')}
                         id="new-model" type="text" name="model" value="${item.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${'form-control '  + (yearValid ? 'is-valid' : 'is-invalid')}
                         id="new-year" type="number" name="year" value="${item.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${'form-control '  + (descriptionValid ? 'is-valid' : 'is-invalid')} 
                        id="new-description" type="text" name="description" value="${item.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${'form-control '  + (priceValid ? 'is-valid' : 'is-invalid')}
                         id="new-price" type="number" name="price" value="${item.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${'form-control '  + (imageValid ? 'is-valid' : 'is-invalid')}
                        id="new-image" type="text" name="img" value="${item.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${item.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `



export async function editPage(ctx){
    const item = await getItemById(ctx.params.id)
    let makeValid = true
    let modelValid = true
    let yearValid = true
    let descriptionValid = true
    let priceValid = true
    let imageValid = true


    ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))

    async function onSubmit(event){
        event.preventDefault()
    
        const formData = new FormData(event.target)
       
        // let dataObj = [...formData.entries()].reduce((result, [k, v]) => Object.assign(result, {[k]:v}), {})
        let dataObj = {}
 
    
        for (let eachInput of [...formData.entries()]){
            if(eachInput[1] == '' && eachInput[0] != 'material'){
                ctx.render(editTemplate(onSubmit, false, false, false, false, false, false))
                return alert('You must fill all fields despite Material')
            }
            if(eachInput[0] == 'make' && eachInput[1].length < 4){
                makeValid = false
                ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                return alert('Make must be at least 4 symbols long')
            }
            if(eachInput[0] == 'model' && eachInput[1].length < 4){
                modelValid = false
                ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                return alert('Model must be at least 4 symbols long')
            }
            if(eachInput[0] == 'year'){
                let year = Number(eachInput[1])
                if(!year){
                    yearValid = false
                    ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                    return alert('Year must a valid number')
                }
                if(year < 1950 || year > 2050){
                    yearValid = false
                    ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                    return alert('Year must be between 1950 and 2050')
                }
          
            }
            if(eachInput[0] == 'description' && eachInput[1].length < 10){
                descriptionValid = false
                ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                return alert('Description must be more than 10 symbols')
            }
            if(eachInput[0] == 'price'){
                let price = Number(eachInput[1])
                if(!price){
                    priceValid = false
                    ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                    return alert('Price must a valid number')
                }
                if(price <= 0){
                    priceValid = false
                    ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                    return alert('Price must be a positive number')
                }
            }
    
            if(eachInput[0] == 'img' && eachInput[1] == ''){
                imageValid = false
                ctx.render(editTemplate(item, onSubmit, makeValid, modelValid, yearValid, descriptionValid, priceValid, imageValid))
                return alert('Description must be more than 10 symbols')
    
            }
            Object.assign(dataObj, {[eachInput[0]]:eachInput[1]})
    
        }
        
        await editRecord(item._id ,dataObj)
        ctx.page.redirect('/')
    }
}
