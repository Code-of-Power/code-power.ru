import * as React from 'react';
import { MEMBERS } from '@app/consts/members';
import { Member } from '@app/components/member';

export function Peoples() {
    return (
        <section className="vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex flex-wrap">
                        {MEMBERS.map(m => (<Member member={m} />))}
                    </div>
                    <div className="offset-md-1 col-4">
                        <div className="h3 text-white">
                            Наша команда - молодые, активно развивающиеся специлисты IT отрасли,
                            специализирующиеся на веб-разработке, тестировании и искуственном интелекте.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}