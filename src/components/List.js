import React from 'react';
import Axios from 'axios';
import Card from './Card'
import './styles/list.css'

//coded by Vlad Zahorodnyy

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [],
            searchByName: '',
            searchByTag: ''
        };
    }

    componentDidMount() {
        
        // making Api call using Axios
        Axios.get(`https://api.hatchways.io/assessment/students`)

        // Adding empty array for tags to each student, and setting our state with data we have got
        .then((results) => {
            results.data.students.forEach( el => {
                el.tags = [];
            })
            this.setState({data: results.data.students})
        })
        .catch((error)=>console.log(error)) 
    }

    // function that handles render depending on our search
    handleRender = () => {
        
        //our final array to render  will be our 'state.data' unless changed by searching 
        let final = this.state.data;
        
        // if both seaarch inputs (by tag, and by name) are not empty 
        if(this.state.searchByName !== '' && this.state.searchByTag !== ''){

            // first filter students by name
            let searchedStudents = this.state.data.filter(
                (student) => {
                    return student.firstName.toLowerCase().indexOf(this.state.searchByName.toLowerCase()) !== -1
                        || student.lastName.toLowerCase().indexOf(this.state.searchByName.toLowerCase()) !== -1
                }
            );
            
            // then filter students by tag, out of 'filtered by name students'
            let searchedBoth = searchedStudents.filter(
                (student) => {
                    return this.withTag(student.tags, this.state.searchByTag)
                }            
            );

            // assign result to final array which is going to be rendered
            final = searchedBoth;
        }

        // if only 'search by name' iput is not empty 
        if(this.state.searchByName !== '' && this.state.searchByTag === ''){

            // filter students by name
            let searchedStudents = this.state.data.filter(
                (student) => {
                    return student.firstName.toLowerCase().indexOf(this.state.searchByName.toLowerCase()) !== -1
                        || student.lastName.toLowerCase().indexOf(this.state.searchByName.toLowerCase()) !== -1
                }
            );
            
            // assign result to final array which is going to be rendered
            final = searchedStudents;
        }

        // if only 'search by tag' iput is not empty
        if(this.state.searchByTag !== '' && this.state.searchByName === ''){

            // filter students by tag
            let studentsWithTags = this.state.data.filter(
                (student) => {
                    return this.withTag(student.tags, this.state.searchByTag)
                }
            );

            // assign result to final array which is going to be rendered
            final = studentsWithTags;
        }

        // map final array (Each element wrapped in our Card component and props are passed)
        return final.map((student) => {
            return(
                <div key={student.id}>
                  <Card student={student} addTags={this.addTags} key={student.id} />  
                </div>
            );
        });
    }

    // event handler that loads name search input to the state
    onNameSearch = (e) => {
        this.setState({searchByName: e.target.value})
    }

     // event handler that loads tag search input to the state
    onTagSearch = (e) => {
        this.setState({searchByTag: e.target.value})
    }

    // function that adds tags to each student's 'tags' array, will be passed as a prop to our child component to change state
    addTags = (id, tag) => {
        
        // change student id to position (because arrays are zero based)
        let idToPos = parseInt(id) - 1;

        // making copy of state.data
        let newPiece = this.state.data.slice(0);

        // adding new id to the approperiate student using our position to find correct student
        newPiece[idToPos].tags.push(tag)

        // setting our state with renewed data
        this.setState({data: newPiece});
    }

    // small callback function we will be using in our render haandler method 
    // to find out if the student has the tag we are looking for
    withTag(tagsArray, inputTag) {
        return tagsArray.indexOf(inputTag) > -1
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" placeholder="Search by name" id='name-input' value={this.state.searchByName} onChange={this.onNameSearch} />
                    <input type="text" placeholder="Search by tag" id='tag-input' value={this.state.searchByTag} onChange={this.onTagSearch} />
                </div>
                <div className='list'>
                    {this.handleRender()}
                </div>
            </div>
        );
    }
}

export default List