import React from "react";
import "./search.css";

const Search=()=>{
    return(
        <div className="row justify-content-center">
        <div className="col-12 search_inp ">
            <div className="panel panel-default">
                <div className="panel-body p-t-0">
                    <div className="input-group">
                        <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Search"/>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-effect-ripple btn-primary"><i className="fa fa-search"></i></button>
                        </span>                    
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}
export default Search;