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
            .then(() => this.props.fetchUser(this.props.userId))
            .then(() => this.props.history.push("/profile"))
    }

    renderErrors(){
        if (this.state.errors.length > 0){
            return <p>{this.state.errors}</p>
        }
    }

    render(){
        return <form action="" onSubmit={this.handleSubmit}>
            <p>Upload an Image</p>
            <img src={this.state.fileUrl} alt=""/>
            {this.renderErrors()}
            <textarea cols="30" rows="10" placeholder="description" onChange={this.updateAttribute("description")}></textarea>
            <input type="file" id="upload-post-picture" onChange={this.handleFile}/>
            <button type="submit">Create Post!</button>
        </form>
    }
}

export default UploadItem