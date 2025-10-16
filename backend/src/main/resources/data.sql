-- Ett spørsmål med fire svar
INSERT INTO question(id, text) VALUES (1, 'Hva er hovedstaden i Norge?');

INSERT INTO choice(id, text, correct, question_id) VALUES
                                                       (1, 'Oslo', true, 1),
                                                       (2, 'Bergen', false, 1),
                                                       (3, 'Trondheim', false, 1),
                                                       (4, 'Stavanger', false, 1);
