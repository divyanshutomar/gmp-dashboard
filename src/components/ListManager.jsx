var React = require('react');
var path = require('../path.js');
var List = require('./List.jsx');
var ReactDOM = require('react-dom');
var classNames = require('classnames');


const PAGE_SIZE = 30;
var API_end = path.HOST+":"+path.PORT+path.BASE_URL;
var CurrentPageVal = 0;

var ListManager = React.createClass({
	getInitialState: function () {
		return({data :[],btnPrevDisabled : false,btnNextDisabled: false,datasetCount:0});
	},
	checkPagesBound: function () {
			CurrentPageVal<1?this.setState({btnPrevDisabled:true}):this.setState({btnPrevDisabled:false});
			(CurrentPageVal<this.state.datasetCount && CurrentPageVal+PAGE_SIZE>this.state.datasetCount)?this.setState({btnNextDisabled:true}):this.setState({btnNextDisabled:false});
	},
	getDatasetCount: function () {
		$.ajax({
	      url: this.props.url+"/count",
	      cache: false,
	      success: function(data) {
	        this.setState({datasetCount:data['count']});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	getDataset: function (limitVal,skipVal) {
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      data: {
	      	"filter":
			      	 {
					'limit':limitVal,
					'skip':skipVal
					}
			},
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	componentDidMount: function () {
		this.getDatasetCount();
		this.getDataset(PAGE_SIZE,CurrentPageVal);
		this.checkPagesBound();
	},
	onPageNext: function () {
		this.getDataset(PAGE_SIZE,CurrentPageVal+PAGE_SIZE);
		CurrentPageVal+=PAGE_SIZE;
		this.checkPagesBound();

	},
	onPagePrev: function () {
		this.getDataset(PAGE_SIZE,CurrentPageVal-PAGE_SIZE);
		CurrentPageVal-=PAGE_SIZE;
		this.checkPagesBound();

	},
	render: function () {
		var btnPrevClasses = classNames('waves-effect', 'waves-light','btn','blue',{'disabled':this.state.btnPrevDisabled});
		var btnNextClasses = classNames('waves-effect', 'waves-light','btn','blue','right',{'disabled':this.state.btnNextDisabled});
		return(
			<div>
				<div>
				<List dataset = {this.state.data}/>
				</div>
				<a className={btnPrevClasses} onClick={this.onPagePrev}>Previous</a>
				<a className={btnNextClasses} onClick={this.onPageNext}>Next</a>
				<div className="clear-fix"></div>
			</div> 
            
			);
	}

});

// module.exports = ListManager;

ReactDOM.render(<ListManager url={API_end + "Companies"} />,document.getElementById('company'));