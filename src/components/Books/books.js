import React from "react";
import BookTerm from "./BookTerm/bookTerm";
import {Link} from 'react-router-dom';
import ReactPaginate from "react-paginate";


class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const bookPageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (

            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                        <div className={"d-flex justify-content-center"}>
                            <Link className={"btn btn-success"} to={"/books/add"}>Add a new book</Link>
                        </div>
                        <ReactPaginate
                            previousLabel={"Back"}
                            style={{ textDecoration: 'none' }}
                            previousClassName={"page-link"}
                            nextLabel={"Next"}
                            nextClassName={"page-link"}
                            breakLabel={<a href="/#">...</a>}
                            breakClassName={"break-me"}
                            pageClassName={"ml-1 page-link"}
                            pageCount={bookPageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination m-4 justify-content-center"}
                            activeClassName={"active"}
                        />
                    </div>
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <BookTerm term={term} onDelete={this.props.onDelete}
                          markAsTaken={this.props.markAsTaken}
                            onEdit={this.props.onEdit}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}


export default Books;