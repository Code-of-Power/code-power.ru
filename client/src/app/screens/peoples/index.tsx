import * as React from 'react';
import { MEMBERS } from '@app/consts/members';
import { Member } from '@app/components/member';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { IMember } from '@app/interfaces/app';

interface IDescriptionProps {
    activeMember: IMember;
}

function Description(props: IDescriptionProps) {
    return !props.activeMember ? (
        <div className="h3 text-white">
            Наша команда - молодые, активно развивающиеся специлисты IT отрасли,
            специализирующиеся на веб-разработке, тестировании и искуственном интелекте.
        </div>
    ) : (
            <div className="text-white">
                {props.activeMember.description}
            </div>
        );
}

interface IPeoplesProps {
    [field: string]: any;
}

export const Peoples = connect((state: IStore) => state.teamReducer)(
    (props: IPeoplesProps) => {
        return (
            <section className="vh-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 d-flex flex-wrap">
                            {MEMBERS.map((m, i) => (<Member key={i} member={m} />))}
                        </div>
                        <div className="offset-md-1 col-4">
                            <Description activeMember={props.activeMember} />
                        </div>
                    </div>
                </div>
            </section>
        );
    });