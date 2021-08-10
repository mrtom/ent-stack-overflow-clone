# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add index question_answered to questions
add index question_author to questions
add index question_title to questions

Revision ID: d9bd38f8eb6b
Revises: c97f7e506f24
Create Date: 2021-08-10 10:17:51.370505+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'd9bd38f8eb6b'
down_revision = 'c97f7e506f24'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('question_answered', 'questions',
                    ['answered'], unique=False)
    op.create_index('question_author', 'questions', ['user_id'], unique=False)
    op.create_index('question_title', 'questions', ['title'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('question_title', table_name='questions')
    op.drop_index('question_author', table_name='questions')
    op.drop_index('question_answered', table_name='questions')
    # ### end Alembic commands ###