import React from "react";
import { connect } from "react-redux";
import { fetchPic } from '../actions/index';
import { CharacterList } from "../components";
import Spinner from 'react-spinner-material';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPic();
  }

  render() {
    if (this.props.fetching) {
      return <Spinner size={400} spinnerColor={"#0000FF"} spinnerWidth={10} visible={true} />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = (state) => ({
characters: state.characters,
fetching: state.fetching
})
export default connect(mapStateToProps, { fetchPic })(CharacterListView);
