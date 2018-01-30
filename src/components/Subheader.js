import React from 'react';

const Subheader = ({title}) => (
    <div className="column">
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </p>
            </div>
        </section>
    </div>
);

export default Subheader;
