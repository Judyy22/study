import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RelatedSlider from "./RelatedSlider";

const RelatedMovie = ({ related }) => {
    return (
        <div>
            <div className="row">
                {related?.results.map((movie) => {
                    return (
                        <div className="col-lg-6">
                            <RelatedSlider movie={movie} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedMovie;
