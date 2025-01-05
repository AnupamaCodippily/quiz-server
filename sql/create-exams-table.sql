CREATE TABLE exams (
    id SERIAL PRIMARY KEY,
    topics TEXT[] NOT NULL,
    difficulty NOT NULL,
    time_limit INT,  -- Assuming time_limit is in seconds
    custom_prompt TEXT,  -- String for custom prompt
    questions_list JSONB NOT NULL,  -- Store questions as a JSON array (JSONB is preferred for performance in PostgreSQL)
    answers_list JSONB NOT NULL -- Store answers as a JSON array (JSONB is preferred)
);
