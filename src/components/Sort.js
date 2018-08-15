import React from 'react';

class Sort extends React.Component {
    render(){
        return (
            <div>
                <h3>Sort By:</h3>
                <form onSubmit={this.props.handleSort}>
                    <select onChange={this.props.handleChange}>
                        <option value="" hidden>Select:</option>
                        <option value="all">All</option>
                        <option value="health">Health</option>
                        <option value="damage">Damage</option>
                        <option value="armor">Armor</option>
                    </select>
                    <input type="submit" value="Sort!" />
                </form>
            </div>
        )
    }
}

export default Sort;