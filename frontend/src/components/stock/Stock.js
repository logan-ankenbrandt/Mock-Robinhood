import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none",
  color: "blue",
};


function Stock(props) {

    const displayStock = (props) => {
      const { stocks } = props;

        if (stocks.length > 0) {
          return stocks.map((stock) => {
            return (
              <div>
                <Link to={`/${stock.ticker}`} style={linkStyle} >
                  <hr />
                  <p>
                    ({stock.ticker}) {stock.price[stock.price.length - 1]}
                  </p>
                </Link>
              </div>
            );
          });
        } else {
          return (
            <div>
              <p>Loading...</p>
            </div>
          );
        }
    }

    return (
        <div>
            {displayStock(props)}
        </div>
    )
}


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(Stock));
