import { Component } from 'react';

class CardList extends Component {
    render() {
        const { workers } = this.props;

        return (
            <div className="card-list">
                {workers.map((worker) => {
                    <div className="card-container">

                    </div>
                })}
            </div>
        )
    }
}

export default CardList;