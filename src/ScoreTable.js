import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  getTotalScore() {
    let total = 0;
    const { scores } = this.props;
    for (let key in scores) {
      if (scores[key]) {
        total += scores[key];
      }
    }
    return total;
  }

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow rolling={this.props.rolling} name="Ones" score={scores.ones} description={ones.description} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Twos" score={scores.twos} description={twos.description} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Threes" score={scores.threes} description={threes.description} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Fours" score={scores.fours} description={fours.description} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Fives" score={scores.fives} description={fives.description} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Sixes" score={scores.sixes} description={sixes.description} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow rolling={this.props.rolling} name="Three of Kind" score={scores.threeOfKind} description={threeOfKind.description} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Four of Kind" score={scores.fourOfKind} description={fourOfKind.description} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Full House" score={scores.fullHouse} description={fullHouse.description} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Small Straight" score={scores.smallStraight} description={smallStraight.description} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Large Straight" score={scores.largeStraight} description={largeStraight.description} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Yahtzee" score={scores.yahtzee} description={yahtzee.description} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow rolling={this.props.rolling} name="Chance" score={scores.chance} description={chance.description} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {this.getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;