import React from "react"

class UploadItem extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            description: "",
            file: null,
            fileUrl: "",
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
            this.setState({file: file, fileUrl: reader.result})
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

    render(){
        return <form action="" onSubmit={this.handleSubmit}>
            <p>Upload an Image</p>
            <img src={this.state.fileUrl} alt=""/>
            <textarea cols="30" rows="10" placeholder="description" onChange={this.updateAttribute("description")}></textarea>
            <input type="file" id="upload-post-picture" onChange={this.handleFile}/>
            <button type="submit">Create Post!</button>
        </form>
    }
}

export default UploadItem