import React from 'react';
import './styles/card.css';

//coded by Vlad Zahorodnyy

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expand: false,
            btn: '+',
            newTag: '',
        };
    }

    // small function we will be using to calculate average grade
    averageCalc = (grades) => {
        return grades.reduce((a, b) => parseInt(a) + parseInt(b)) / grades.length
    }

    // function that expands grades and tags view, and changes button and 'expanded' state, triggered by '+' button
    expand = () => {

        let button, expanded;

        if(!this.state.expand){
            button = '-'
            expanded = true
        }else{
            button = '+'
            expanded = false
        }

        this.setState({
          expand: expanded,
          btn: button
        })
    }

    // handles input change that corresponds to adding new tags by loading input to the state
    handleNewTag = (e) => {
        this.setState({
            newTag: e.target.value
        })
    }

    // handles pressing enter(submitting) on input that corresponds to adding new tags by using our special function from props
    handeTagSubmit = (e) => {

        // checking to prevent adding empty space or the tag that already exists to our student tags list
        if (e.key === 'Enter' && this.state.newTag.trim('') !== '' && !this.props.student.tags.includes(this.state.newTag)) {                          
            this.props.addTags(this.props.student.id, e.target.value)

            // setting input that corresponds to adding new tags to empty string to allow adding more tags
            this.setState({newTag: ''})
        }
    }

    render(){
        
        // calculating average grade using function we created above
        var aver = this.averageCalc(this.props.student.grades)

        // making array of grades to render wrapped in paragraph with keys
        var grades = []
        for (var i = 0; i < this.props.student.grades.length; i++) {            
            grades.push(<p key={i}>Test {(i+1)}: {this.props.student.grades[i]}%</p>);
        }

        // making array of grades to render wrapped in <li> and with className and with keys
        var tagsList = []
        for (var j = 0; j < this.props.student.tags.length; j++){
                tagsList.push(<li className="tag" key={j}> {this.props.student.tags[j]} </li>);                
        }

        return (
            <div className='card'>
                <button className='expand-btn' onClick={this.expand}>{this.state.btn}</button>
                <img src={this.props.student.pic} alt=''></img>
                <div className='description'>
                    <div className='Name'>
                        <h1>{this.props.student.firstName} {this.props.student.lastName}</h1>                    
                    </div>
                    <div className='info'>
                        <p>Email: {this.props.student.email}</p>
                        <p>Company: {this.props.student.company}</p>
                        <p>Skill: {this.props.student.skill}</p>
                        <p>Average: {aver}%</p>
                        {this.state.expand &&  
                        <div> 
                            <div className="expanded">{grades}</div>
                            <div className="expanded2">{tagsList}</div>
                            <input className="​add-tag-input" 
                                type="text" value = {this.state.newTag} 
                                onChange={this.handleNewTag} 
                                placeholder = "Add a tag" 
                                onKeyPress={this.handeTagSubmit}
                            > 
                            </input>   
                        </div>                                
                        }     
                    </div>           
                </div>

            </div>
        );
    }

}

export default Card;