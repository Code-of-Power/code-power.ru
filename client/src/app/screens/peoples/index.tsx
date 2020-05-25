import * as React from 'react';
import { MEMBERS } from '@app/consts/members';
import { Member } from '@app/components/member';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { IMember } from '@app/interfaces/app';

interface IDescriptionProps {
  activeMember: IMember;
}

function Description({ activeMember }: IDescriptionProps) {
  return !activeMember ? (
    <div className="h4 text-center">
      Наша команда - молодые, активно развивающиеся специалисты IT отрасли,
      специализирующиеся на веб-разработке, тестировании и искусственном
      интеллекте.
    </div>
  ) : (
    <div className="">
      <div className="h3 primary-text">{activeMember.name}</div>
      <div>{activeMember.description}</div>
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
          <h2 className="text-white h2">Наша команда:</h2>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 d-flex flex-wrap members">
              {MEMBERS.map((m, i) => (
                <Member key={i} member={m} />
              ))}
            </div>
            <div className="offset-md-1 col-sm-12 col-md-4 item rounded p-4 d-flex align-items-center">
              <Description activeMember={props.activeMember} />
            </div>
          </div>
        </div>
      </section>
    );
  },
);
