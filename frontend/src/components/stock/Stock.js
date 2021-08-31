import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

function Stock(props) {

    const displayStock = (props) => {
        const { stocks } = props;

        if (stocks.length > 0) {
          return stocks.map((stock, index) => {
            console.log(stock);
            return (
              <div>
                <Link to={`/${stock.ticker}`}>
                  <hr />
                  <p>
                    ({stock.ticker}) {stock.price}
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
