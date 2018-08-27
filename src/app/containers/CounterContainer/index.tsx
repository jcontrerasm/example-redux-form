import * as React from 'react';
import { connect } from 'react-redux';
import { setCounter } from '@app/src/actions/counter';
import { Counter } from '@app/src/app/components/Counter';

interface ICounterContainerProps {
  counter: number;
  setCounter(value: number): void,
}

export class CounterContainer extends React.Component<ICounterContainerProps, {}> {

  constructor(props: any) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    const newValue = this.props.counter + 1;
    this.props.setCounter(newValue);
  }

  decreaseCounter() {
    const newCounter = this.props.counter - 1;
    this.props.setCounter(newCounter);
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={this.increaseCounter}>+</button>
        <Counter counter={this.props.counter} />
        <button onClick={this.decreaseCounter}>-</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });

const mapDispatchToProps = (dispatch: any) => ({
  setCounter: (value: number) => dispatch(setCounter(value))
});

export const CounterContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
