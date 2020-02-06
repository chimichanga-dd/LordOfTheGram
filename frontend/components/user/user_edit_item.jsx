import React from "react"

class UserEditItem extends React.Component{

    constructor(props){
        super(props)

        let {user} = this.props

        this.state = {
            bio: user.bio,
            file: null,
            fileUrl: user.picture,
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

        form.append('user[bio]', this.state.bio);
        if (this.state.file){
            form.append('user[profile_pic]', this.state.file)
        }

        this.props.updateUser(form)
            .then(() => this.props.fetchUser(this.props.user.id))
            .then(() => this.props.history.push("/profile"))
    }

    renderErrors(){
        if (this.state.errors.length > 0){
            return <p>{this.state.errors}</p>
        }
    }

    render(){
        return <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="upload-profile-picture"><img src={this.state.fileUrl} height="100px" width="100px"/></label>
            <input type="file" id="upload-profile-picture" onChange={this.handleFile} />
            {this.renderErrors()}
            <textarea cols="30" rows="10" value={this.state.bio} onChange={this.updateAttribute("bio")}></textarea>
            
            <button type="submit">Update!</button>
        </form>
    }
}

export default UserEditItem