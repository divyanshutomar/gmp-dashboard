var React = require('react');
var ListItem = require('./ListItem.jsx')

var List = React.createClass({
	render: function () {
		var companyRows = this.props.data.map(function (company) {
			return(<ListItem data={company} key ={company.id}/>);
		});
		return(
  			<ul className="collapsible" data-collapsible="accordion">
				{companyRows}
			</ul>
			);
	}
});

module.exports = List;