class Comment {
	constructor(id, author, comment){
		this.id = id;
		this.author = author;
		this.comment = comment;
	}

	equals(other){
		if(!(other instanceof Comment)) return false;
		return (this.id === other.id && this.author === other.author && this.comment === other.comment);
	}
}