var React = require('react');

var ParkingLotsDataBody = React.createClass({
	render: function () {
		return (		
						<div>
							<dl>
				      			<dt>Type</dt>
				      			<dd>{this.props.dataitem.type}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Capacity</dt>
				      			<dd>{this.props.dataitem.capacity}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Collection Model</dt>
				      			<dd>{this.props.dataitem.collectionModel}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Taxi Time</dt>
				      			<dd>{this.props.dataitem.taxiTime}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Auto Checkout Time</dt>
				      			<dd>{this.props.dataitem.autoCheckoutTime}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Auto Checkout Cost</dt>
				      			<dd>{this.props.dataitem.autoCheckoutCost}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Booking Security</dt>
				      			<dd>{this.props.dataitem.bookingSecurity}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Convenience Fee</dt>
				      			<dd>{this.props.dataitem.convenienceFee}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Booking Notes</dt>
				      			<dd>{this.props.dataitem.bookingNotes}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Plate Number Type</dt>
				      			<dd>{this.props.dataitem.plateNumberType}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Mobile Required</dt>
				      			<dd>{this.props.dataitem.mobileRequired}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Valet Name</dt>
				      			<dd>{this.props.dataitem.valetName}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Last Checkin Update Time</dt>
				      			<dd>{this.props.dataitem.lastCheckinUpdateTime}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Inside Photo</dt>
				      			<dd>{this.props.dataitem.insidePhoto}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Created At</dt>
				      			<dd>{this.props.dataitem.createdAt}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Updated At</dt>
				      			<dd>{this.props.dataitem.updatedAt}</dd>
				      		</dl>
				      		
				      	</div>	
			);
	}
});
module.exports = ParkingLotsDataBody;