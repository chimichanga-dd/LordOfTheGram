import React from "react"

class UploadItem extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            description: "",
            file: null,
            fileUrl: "",
            errors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    updateAttribute(attribute){
        return (e) => this.setState({[attribute]: e.currentTarget.value})
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // extract substring after last dot from file
            const ext = file.name.substr(file.name.lastIndexOf(".") + 1).toLowerCase();
            const extensions = ["jpg","png"];
            if (extensions.includes(ext)){
                this.setState({ file: file, fileUrl: reader.result, errors: [] })
            } else {
                this.setState({ file: null, fileUrl: "", errors: "File must be a 'JPG' or 'PNG" })
            }
        }
        if (file){
            reader.readAsDataURL(file)
        }
    }

    handleSubmit(e){
        e.preventDefault()
        let form = new FormData()

        form.append('post[description]', this.state.description);
        form.append('post[photo]', this.state.file);

        this.props.createPost(form)
            .then(() => this.props.history.push("/profile"))
    }

    renderErrors(){
        if (this.state.errors.length > 0){
            return <p className="errors">{this.state.errors}</p>
        }
    }

    render(){
        return <div className="post-form-container">
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <h2 className="bold">Upload an Image</h2>
                    <img id="post-image" src={this.state.fileUrl} alt="" />
                    <div className="add-image-button" >
                        <label htmlFor="post-image-picture">Add Image</label>
                    </div>
                    <input type="file" id="post-image-picture" onChange={this.handleFile} />
                    {this.renderErrors()}
                    <div className="post-description-container">
                        <label htmlFor="post-description">Description</label>
                        <textarea
                            id="post-description"
                            cols="30"
                            rows="10"
                            placeholder="Describe your masterpiece..."
                            onChange={this.updateAttribute("description")}></textarea>
                    </div>
                    
                    <button type="submit" disabled={this.state.errors.length > 0 || !this.state.file}>Create Post!</button>
                </form>
            </div>
    }
}

export default UploadItem