import React from "react";
import PropTypes from "prop-types";

export class Board extends React.Component {
	constructor() {
		super();

		this.state = {
			squareValues: ["", "", "", "", "", "", "", "", ""]
		};
	}

	updateNextMove(squarePressed) {
		var newSquareValues = this.state.squareValues.map((item, position) =>
			position == squarePressed ? this.props.currentPlayer : item
		);
		this.setState({ squareValues: newSquareValues });
		this.props.onMove(squarePressed);
		this.checkForWinner(newSquareValues);
	}

	checkForWinner(currentSquareValues) {
		var winningCombinations = [
			//horizontal linea recta
			[1, 1, 1, 0, 0, 0, 0, 0, 0],

			[0, 0, 0, 1, 1, 1, 0, 0, 0],

			[0, 0, 0, 0, 0, 0, 1, 1, 1],

			//vertical linea recta
			[1, 0, 0, 1, 0, 0, 1, 0, 0],

			[0, 1, 0, 0, 1, 0, 0, 1, 0],

			[0, 0, 1, 0, 0, 1, 0, 0, 1],

			//diagonal linea recta
			[1, 0, 0, 0, 1, 0, 0, 0, 1],

			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];

		winningCombinations.forEach(winningCombo => {
			var winner = this.checkWinnerCombo(
				winningCombo,
				currentSquareValues
			);
			if (winner != null) {
				this.props.onWinner(this.props.currentPlayer);
				this.setState({
					squareValues: ["", "", "", "", "", "", "", "", ""]
				});
			}
		});
		return null;
	}

	checkWinnerCombo(winningCombo, currentSquareValues) {
		var successfullMatches = 0;
		for (let i = 0; i < winningCombo.length; i++) {
			if (winningCombo[i] == 1) {
				if (currentSquareValues[i] == this.props.currentPlayer) {
					successfullMatches++;
					if (successfullMatches > 2) {
						return this.props.currentPlayer;
					}
				}
			}
		}
	}

	render() {
		if (this.props.currentPlayer == null) return "";

		return (
			<div className="container">
				<div className="board clearfix">
					<div className="row">
						<div
							className="square"
							onClick={() => this.updateNextMove(0)}>
							{this.state.squareValues[0]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(1)}>
							{this.state.squareValues[1]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(2)}>
							{this.state.squareValues[2]}
						</div>
					</div>
					<div className="row">
						<div
							className="square"
							onClick={() => this.updateNextMove(3)}>
							{this.state.squareValues[3]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(4)}>
							{this.state.squareValues[4]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(5)}>
							{this.state.squareValues[5]}
						</div>
					</div>
					<div className="row">
						<div
							className="square"
							onClick={() => this.updateNextMove(6)}>
							{this.state.squareValues[6]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(7)}>
							{this.state.squareValues[7]}
						</div>
						<div
							className="square"
							onClick={() => this.updateNextMove(8)}>
							{this.state.squareValues[8]}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	hide: PropTypes.bool,
	currentPlayer: PropTypes.string,
	onMove: PropTypes.func,
	onWinner: PropTypes.func
};
