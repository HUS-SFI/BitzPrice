class Prices extends React.Component {
    render() {
        return (
            <div className="prices">
                <p>{this.props.data.time.updated}</p>
                {console.log(this.props.data)}
                <p>
                    {this.props.data.bpi.USD.code}
                    {" : "}
                    {this.props.data.bpi.USD.rate}
                    &#36;;
                </p>
                <p>
                    {this.props.data.bpi.EUR.code}
                    {" : "}
                    {this.props.data.bpi.EUR.rate}
                    &euro;
                </p>
                <p>
                    {this.props.data.bpi.GBP.code}
                    {" : "}
                    {this.props.data.bpi.GBP.rate}
                    &pound;
                </p>
                <style jsx>{`
                    .prices {
                        background-color: #f4f4f4;
                        border: 1px solid #ccc;
                        max-width: 1000px;
                        padding: 1rem 5rem;
                        margin: auto;
                    }
                    p {
                        margin: 1rem;
                    }
                `}</style>
            </div>
        )
    }
}

export default Prices
