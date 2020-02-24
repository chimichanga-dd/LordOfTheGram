import React from "react"

class UserEditItem extends React.Component{

    constructor(props){
        super(props)

        let {user} = this.props

        this.state = {
            bio: user.bio || "",
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
            const extensions = ["jpg", "jpeg", "png"];
            if (extensions.includes(ext)){
                this.setState({ file: file, fileUrl: reader.result, errors: [] })
            } else {
                this.setState({ file: null, fileUrl: "", errors: "File must be a 'JPG', 'JPEG' or 'PNG" })
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
            return <p className="errors">{this.state.errors}</p>
        }
    }

    render(){
        return <div className="user-edit-form-container">
            <form className="user-edit-form" onSubmit={this.handleSubmit}>
                <h2 className="bold">Edit Profile</h2>
                <label className="profile-picture-label" htmlFor="upload-profile-picture"><img src={this.state.fileUrl} /></label>
                <input type="file" id="upload-profile-picture" onChange={this.handleFile} />
                {this.renderErrors()}
                <div className="user-bio-container">
                    <label htmlFor="user-bio">Bio</label>
                    <textarea id="user-bio" cols="30" rows="10" value={this.state.bio} onChange={this.updateAttribute("bio")}></textarea>
                </div>
                <button type="submit" disabled={this.state.errors.length > 0}>Update!</button>
            </form>
        </div>
        
    }
}

export default UserEditItem